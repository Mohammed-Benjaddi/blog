import firebase_app from "../../firebase/config";
import { getFirestore, collection, getDoc, getDocs, doc, query, orderBy, where } from "firebase/firestore";

const db = getFirestore(firebase_app)
const colRef = collection(db, "posts");

export const fetchData = async () => {
  const data = [];

  try {
    const q = query(colRef, orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), createdAt: doc.data().createdAt.toMillis(), id: doc.id });
    });

  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return data;
};

export const fetchSelectedPost = async (id) => {
  const docRef = doc(db, "posts", id)
  const docSnapshot = await getDoc(docRef);
  const data = { ...docSnapshot.data(), createdAt: docSnapshot.data().createdAt.toMillis(), id: docSnapshot.id }

  return data
}

export const fetchCategories = async () => {
  const categories = new Set([]);

  try {
    categories.add('all')
    const q = query(colRef, orderBy("createdAt", "asc"),)
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      categories.add(doc.data().category)
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return Array.from(categories);
};

export const fetchCategoryPosts = async (category) => {
  const data = [];

  try {
    const q = query(colRef, where("category", "==", category), orderBy("createdAt", "asc"))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), createdAt: doc.data().createdAt.toMillis(), id: doc.id });
    });

  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return data;
};