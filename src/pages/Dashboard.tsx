import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addDoc, collection, deleteDoc, doc,
  onSnapshot, orderBy, query, serverTimestamp, updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { setCardOne } from "../redux/slice";

type Card = {
  id?: string;
  title: string;
  description: string;
  img: string;
  img2?: string;
  createdAt?: any;
};

export default function Dashboard() {
  const dispatch = useDispatch();

  const [cards, setCards] = useState<Card[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [img2, setImg2] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    const col = collection(db, "cardone");
    const q = query(col, orderBy("createdAt", "asc"));
    const unsub = onSnapshot(
      q,
      (snap) => {
        const data = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })) as Card[];
        setCards(data);
        dispatch(setCardOne(data));
      },
      (e) => setErr(e.message || "Firestore error")
    );
    return () => unsub();
  }, [dispatch]);

  const resetForm = () => {
    setTitle(""); setDescription(""); setImg(""); setImg2("");
    setEditId(null); setErr(null);
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
      if (editId) {
        await updateDoc(doc(db, "cardone", editId), {
          title: title.trim(),
          description: description.trim(),
          img: img.trim(),
          img2: img2.trim() || undefined,
        });
      } else {
        await addDoc(collection(db, "cardone"), {
          title: title.trim(),
          description: description.trim(),
          img: img.trim(),
          img2: img2.trim() || undefined,
          createdAt: serverTimestamp(),
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

  const handleEdit = (card: Card) => {
    setEditId(card.id || null);
    setTitle(card.title);
    setDescription(card.description);
    setImg(card.img);
    setImg2(card.img2 || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-primarybg text-white font-roboto px-6 sm:px-10 lg:px-20 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2 text-brown-70">
          Dashboard
        </h1>
        <p className="text-gray-70 text-base sm:text-lg">
          Manage your feature cards
        </p>
      </header>

      <section className="max-w-5xl mx-auto backdrop-blur-xl bg-dark-15/80 border border-dark-20 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] p-8 sm:p-10 mb-16">
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
      </section>
    </div>
  );
}
