const asyncFunction = async () => {
  try {
    const res1 = await asynchronousOperation();
    return res1;
  } catch (e) {
    console.error(e);
  } finally {
    console.log("Preloader is false");
  }
};
