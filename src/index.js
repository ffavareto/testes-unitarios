function sum(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return null;
  }

  return n1 + n2;
}

export default sum;
