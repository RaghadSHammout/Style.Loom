import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { setCardOne, type CardOneItem } from "../redux/slice";

type CardLocal = CardOneItem & {
  createdAtServer?: any;
};

export default function Dashboard() {
  const dispatch = useDispatch();

  const [cards, setCards] = useState<CardLocal[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [img2, setImg2] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [editId, setEditId] = useState<string | null>(null);

  const [initialLoading, setInitialLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    const colRef = collection(db, "cardone");
    const q = query(colRef, orderBy("createdAt", "asc"));

    const unsub = onSnapshot(
      q,
      { includeMetadataChanges: true },
      (snap) => {
        type FirePayload = Omit<CardLocal, "id">;

        const data: CardLocal[] = snap.docs.map((d) => {
          const payload = d.data() as FirePayload;
          return {
            ...payload,
            id: d.id,
          };
        });

        setCards(data);
        dispatch(setCardOne(data));
        setIsSyncing(snap.metadata.hasPendingWrites);
        setInitialLoading(false);
      },
      (e) => {
        setErr(e.message || "Firestore error");
        setInitialLoading(false);
      }
    );

    return () => unsub();
  }, [dispatch]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImg("");
    setImg2("");
    setEditId(null);
    setErr(null);
  };

  const isValidUrl = (u: string) => /^https?:\/\//i.test(u.trim());

  const handleAddOrUpdate = async () => {
    setErr(null);

    if (!title.trim() || !description.trim() || !img.trim()) {
      setErr("Please fill Title, Description and Img.");
      return;
    }
    if (!isValidUrl(img) || (img2 && !isValidUrl(img2))) {
      setErr("Image URLs must start with http(s)://");
      return;
    }

    setLoading(true);
    try {
      const payloadBase = {
        title: title.trim(),
        description: description.trim(),
        img: img.trim(),
        img2: img2.trim() || undefined,
      };

      if (editId) {
        await updateDoc(doc(db, "cardone", editId), {
          ...payloadBase,
        });
      } else {
        await addDoc(collection(db, "cardone"), {
          ...payloadBase,
          createdAt: Timestamp.now(),
          createdAtServer: serverTimestamp(),
        });
      }
      resetForm();
    } catch (e: any) {
      setErr(e.message || "Save failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id?: string) => {
    if (!id) return;
    try {
      await deleteDoc(doc(db, "cardone", id));
    } catch (e: any) {
      setErr(e.message || "Delete failed");
    }
  };

  const handleEdit = (card: CardLocal) => {
    setEditId(card.id || null);
    setTitle(card.title);
    setDescription(card.description);
    setImg(card.img);
    setImg2(card.img2 || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skeletons = useMemo(
    () =>
      Array.from({ length: 3 }).map((_, i) => (
        <div
          key={`sk-${i}`}
          className="animate-pulse backdrop-blur-xl bg-dark-15/80 border border-dark-20 rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.4)]"
        >
          <div className="w-full h-56 sm:h-64 bg-dark-20" />
          <div className="p-6">
            <div className="h-6 bg-dark-20 rounded w-2/3 mb-3" />
            <div className="h-4 bg-dark-20 rounded w-full mb-2" />
            <div className="h-4 bg-dark-20 rounded w-5/6" />
            <div className="mt-6 pt-4 border-t border-dark-20 flex gap-3">
              <div className="h-10 w-24 bg-dark-20 rounded" />
              <div className="h-10 w-24 bg-dark-20 rounded" />
            </div>
          </div>
        </div>
      )),
    []
  );

  return (
    <div className="min-h-screen font-roboto px-6 sm:px-10 lg:px-20 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2 text-brown-70">
          Dashboard
        </h1>
        <p className="text-gray-70 text-base sm:text-lg flex items-center justify-center gap-3">
          Manage your feature cards
          {isSyncing && (
            <span className="text-xs px-2 py-1 rounded-lg bg-dark-20 border border-dark-30">
              Syncing…
            </span>
          )}
        </p>
      </header>

      <section className="max-w-5xl mx-auto backdrop-blur-xl bg-dark-15/0 border border-dark-20 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] p-8 sm:p-10 mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-brown-70">
            {editId ? "Edit Card" : "Add New Card"}
          </h2>
          {editId && (
            <button
              onClick={resetForm}
              className="px-4 py-2 rounded-lg bg-dark-20 hover:bg-dark-30 text-gray-80 transition"
            >
              Cancel
            </button>
          )}
        </div>

        {err && <p className="text-red-400 mb-5">{err}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            className="bg-dark-12/70 border border-dark-20 text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-secondary transition"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="bg-dark-12/70 border border-dark-20 text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-secondary transition"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="bg-dark-12/70 border border-dark-20 text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-secondary transition md:col-span-2"
            placeholder="Img (Cloudinary URL)"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <input
            className="bg-dark-12/70 border border-dark-20 text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-secondary transition md:col-span-2"
            placeholder="Img2 (optional Cloudinary URL)"
            value={img2}
            onChange={(e) => setImg2(e.target.value)}
          />
        </div>

        <div className="mt-7 flex gap-4">
          <button
            onClick={handleAddOrUpdate}
            disabled={loading}
            className="px-7 py-3 rounded-xl font-semibold text-lg bg-secondary text-white shadow-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Saving..." : editId ? "Update" : "Add"}
          </button>
          {!editId && (
            <button
              onClick={resetForm}
              className="px-7 py-3 rounded-xl font-medium bg-dark-20 hover:bg-dark-30 text-gray-80 transition"
            >
              Reset
            </button>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl sm:text-3xl font-semibold text-brown-70">All Cards</h3>
          <span className="text-gray-70 text-xs sm:text-sm">
            {cards.length} item{cards.length !== 1 ? "s" : ""}
          </span>
        </div>

        {initialLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 my-media:grid-cols-3 gap-8 sm:gap-10">
            {skeletons}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 my-media:grid-cols-3 gap-8 sm:gap-10">
            {cards.map((c) => (
              <article
                key={c.id}
                className="group backdrop-blur-xl bg-dark-15/80 border border-dark-20 rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.4)] hover:shadow-[0_28px_70px_rgba(0,0,0,0.55)] hover:scale-[1.02] transition-all duration-300 flex flex-col"
              >
                {c.img && (
                  <img src={c.img} alt="" className="w-full h-56 sm:h-64 object-cover" />
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl sm:text-2xl font-bold mb-2">{c.title}</h4>
                  <p className="text-gray-50 text-sm sm:text-base flex-1">{c.description}</p>

                  <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-dark-20">
                    <button
                      onClick={() => handleEdit(c)}
                      className="px-4 py-2 rounded-lg font-semibold bg-brown-70 text-dark-12 hover:opacity-90 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(c.id)}
                      className="px-4 py-2 rounded-lg font-semibold bg-dark-20 hover:bg-dark-30 text-red-400 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {cards.length === 0 && (
              <p className="text-gray-70 col-span-full text-center text-base sm:text-lg">
                No cards yet
              </p>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
