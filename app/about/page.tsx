import { Layout } from "@/app/components";

export default function About() {
  return (
    <Layout title="Informacje">
      <div className="max-w-xs max-h-xs m-auto">
        <div>
          <p>
            Hej! Witaj na małej, ptasiej zgadywance. Celem gry jest odgadnięcie
            jak największej liczby ptaków.
          </p>
          <p className="mt-2">
            W tym celu należy wybrać jedną z czterech podpowiedzi, która według
            Ciebie jest poprawna.
          </p>
          <p className="mt-2">
            Obecna baza ptaków jest zaczerpnięta ze strony{" "}
            <a
              className="font-medium underline"
              href="https://pl.wikipedia.org/wiki/Ptaki_Polski"
            >
              Ptaki Polski
            </a>{" "}
            na Wikipedii.
          </p>
        </div>
        <div className="mt-4">
          <h4 className="text-xl mt-1 mb-2">Co w planach?</h4>
          <p>Krótka lista zmian, które planuję w najbliższych miesiącach:</p>
          <ul className="list-disc list-inside">
            <li>zdobycie lepszej jakości zdjęć ptaków</li>
            <li>dodatkowe kategorie zgadywanek</li>
            <li>???</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
