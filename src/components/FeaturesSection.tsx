import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import Cards from "../components/Cards";
import { ShowImageType } from "../types";

export default function FeaturesSection() {
  const items = useSelector((s: RootState) => s.cards.cardone);

  return (
    <section className="w-full">
      <div className="sm:flex sm:flex-wrap gap-0">
        {items.map((it, i) => (
          <Cards
            key={i}
            img={it.img}
            img2={it.img2}
            title={it.title}
            description={it.description}
            showimage={ShowImageType.one}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}