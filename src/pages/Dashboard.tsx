import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import {fetchItems, addItem, updateItemThunk, deleteItemThunk, setEditing } from "../redux/slices/dashboardSlice";
import type {Item } from "../redux/slices/dashboardSlice";

const empty: Item = {
    title: "",
    fit: "",
    price: 0,
    image: "",
    status: "In stock",
    description: "",
    materials: "",
    features: [],
    sizes: [],
    rating: 0,
    reviewsCount: 0,
    gallery: [],
    fabricImage: ""
};

export default function Dashboard() {
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, error, editing } = useSelector((s: RootState) => s.dashboard);

    const [form, setForm] = useState<Item>(empty);

    useEffect(() => { dispatch(fetchItems()); }, [dispatch]);
useEffect(() => {
  if (editing) {
    setForm(editing);
  } else {
    setForm(empty);
  }
}, [editing]);

    // تحويل حقول القوائم (inputs النصية إلى arrays)
    const ui = useMemo(() => ({
        features: form.features.join(", "),
        sizes: form.sizes.join(", "),
        gallery: form.gallery.join(", ")
    }), [form]);

    const parseList = (v: string) =>
        v.split(",").map(s => s.trim()).filter(Boolean);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const payload: Item = {
            ...form,
            price: Number(form.price),
            rating: Number(form.rating),
            reviewsCount: Number(form.reviewsCount),
            features: parseList((document.getElementById("features") as HTMLInputElement).value),
            sizes: parseList((document.getElementById("sizes") as HTMLInputElement).value),
            gallery: parseList((document.getElementById("gallery") as HTMLInputElement).value),
        };

        if (editing?.id) {
            await dispatch(updateItemThunk({ ...payload, id: editing.id }));
            dispatch(setEditing(null));
        } else {
            await dispatch(addItem(payload));
        }
        setForm(empty);
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Womenswear Dashboard</h1>

            {/* FORM */}
            <form onSubmit={onSubmit} className="grid gap-3 md:grid-cols-3 bg-white/5 p-4 rounded-xl">
                <input className="border rounded px-3 py-2" placeholder="Title"
                    value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required />
                <input className="border rounded px-3 py-2" placeholder="Fit"
                    value={form.fit} onChange={e => setForm(f => ({ ...f, fit: e.target.value }))} required />
                <input className="border rounded px-3 py-2" placeholder="Price" type="number" step="0.01"
                    value={form.price} onChange={e => setForm(f => ({ ...f, price: Number(e.target.value) }))} required />

                <input className="border rounded px-3 py-2 md:col-span-2" placeholder="Main Image URL"
                    value={form.image} onChange={e => setForm(f => ({ ...f, image: e.target.value }))} required />
                <select className="border rounded px-3 py-2"
                    value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
                    <option>In stock</option>
                    <option>Out of stock</option>
                </select>

                <textarea className="border rounded px-3 py-2 md:col-span-3" placeholder="Short Description"
                    value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />

                <textarea className="border rounded px-3 py-2 md:col-span-3" placeholder="Materials"
                    value={form.materials} onChange={e => setForm(f => ({ ...f, materials: e.target.value }))} />

                <input id="features" className="border rounded px-3 py-2 md:col-span-3"
                    placeholder="Features (comma separated)"
                    defaultValue={ui.features} onChange={() => {}} />

                <input id="sizes" className="border rounded px-3 py-2"
                    placeholder="Sizes e.g. S, M, L, XL" defaultValue={ui.sizes} />
                <input className="border rounded px-3 py-2" placeholder="Rating e.g. 4.8" type="number" step="0.1"
                    value={form.rating} onChange={e => setForm(f => ({ ...f, rating: Number(e.target.value) }))} />
                <input className="border rounded px-3 py-2" placeholder="Reviews Count" type="number"
                    value={form.reviewsCount} onChange={e => setForm(f => ({ ...f, reviewsCount: Number(e.target.value) }))} />

                <input id="gallery" className="border rounded px-3 py-2 md:col-span-2"
                    placeholder="Gallery URLs (comma separated)" defaultValue={ui.gallery} />
                <input className="border rounded px-3 py-2" placeholder="Fabric Image URL"
                    value={form.fabricImage} onChange={e => setForm(f => ({ ...f, fabricImage: e.target.value }))} />

                <div className="md:col-span-3 flex gap-2">
                    <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">
                        {editing ? "Update" : "Add"}
                    </button>
                    {editing && (
                        <button type="button" className="px-4 py-2 rounded bg-gray-600 text-white"
                            onClick={() => { setForm(empty); (dispatch(setEditing(null))); }}>
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            {/* TABLE */}
            <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                    <thead>
                        <tr className="text-left">
                            <th className="border-b p-2">Image</th>
                            <th className="border-b p-2">Title</th>
                            <th className="border-b p-2">Fit</th>
                            <th className="border-b p-2">Price</th>
                            <th className="border-b p-2">Status</th>
                            <th className="border-b p-2">Sizes</th>
                            <th className="border-b p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(it => (
                            <tr key={it.id} className="align-middle hover:bg-white/5">
                                <td className="border-b p-2">
                                    {it.image ? <img src={it.image} alt={it.title} className="h-14 w-14 object-cover rounded" /> : "—"}
                                </td>
                                <td className="border-b p-2">{it.title}</td>
                                <td className="border-b p-2">{it.fit}</td>
                                <td className="border-b p-2">${it.price?.toFixed?.(2)}</td>
                                <td className="border-b p-2">{it.status}</td>
                                <td className="border-b p-2">{it.sizes?.join(", ")}</td>
                                <td className="border-b p-2 space-x-2">
                                    <button className="px-3 py-1 rounded bg-amber-600 text-white"
                                        onClick={() => dispatch(setEditing(it))}>
                                        Edit
                                    </button>
                                    <button className="px-3 py-1 rounded bg-rose-700 text-white"
                                        onClick={() => it.id && dispatch(deleteItemThunk(it.id))}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {loading && <tr><td colSpan={7} className="p-4">Loading…</td></tr>}
                        {!loading && items.length === 0 && <tr><td colSpan={7} className="p-4">No items yet.</td></tr>}
                        {error && <tr><td colSpan={7} className="p-4 text-red-500">{error}</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
