// what is generics-> template  and make the code resuable

function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masla"), wrapInArray(43), wrapInArray({ flavours: "Ginger" });

// mostly used in prisma and drizzle
// generics mean genralization the thing

function par<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

par("masala ", "Test");

interface Box<T> {
  content: T;
}

const numberboex: Box<number> = {
  content: 23,
};

const numberboex3: Box<string> = {
  content: "vishal",
};

// Generics ka real-world use sabse zyada state management aur API response handling me hota hai. Neeche practical + production-level examples de raha hoon.

interface Promise<T> {
  status: number;
  data: T;
}
const res: Promise<{ flavou: String }> = {
  status: 300,
  data: { flavou: "mala" },
};




