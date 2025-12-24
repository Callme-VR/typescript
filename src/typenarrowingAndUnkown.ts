function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `making a chain ${kind}`;
  }
}

// unknown type narrowing with objects
type Animals = {
  cat: string;
  dog: number;
};

function isCheckinganimalsType(obj: any): obj is Animals {
  return (
    typeof obj.cat === "string" && obj !== null && typeof obj.dog === "number"
  );
}

// unknown type narrowing with arrays
function isStringArray(arr: unknown): arr is string[] {
    return Array.isArray(arr) && arr.every(item => typeof item === 'string');
}
