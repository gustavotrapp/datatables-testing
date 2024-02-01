import { db } from "@/server/db";
const r = () => (Math.random() + 1).toString(36).substring(2);

const randomEmpresa = () => {
  return { name: r() };
};
function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const randomPost = () => {
  return {
    name: r(),
    validade: new Date().toLocaleDateString("pt-BR"),
    situacao: getRandomArbitrary(0, 1),
    empresaId: getRandomArbitrary(1, 1000),
  };
};

export default async function Page() {
  let i = 0;
  while (i < 1000) {
    await db.empresa.create({
      data: randomEmpresa(),
    });
    i++;
  }

  i = 0;
  while (i < 1000) {
    await db.post.create({
      data: randomPost(),
    });
    i++;
  }

  return <>Seeded</>;
}
