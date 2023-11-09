import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function getDiscussionsData() {
  const discussionsData: any[] = [];
  const discussionRef = collection(db, "discussions");
  const snapshot = await getDocs(discussionRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return [];
  }
  snapshot.forEach((doc: any) => {
    discussionsData.push({ id: doc.id, ...doc.data() });
  });
  return discussionsData;
}

export async function getGatheringsData() {
  const blogsData: any[] = [];
  const blogRef = collection(db, "gatherings");

  const snapshot = await getDocs(blogRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return [];
  }
  snapshot.forEach((doc: any) => {
    blogsData.push({ id: doc.id, ...doc.data() });
  });
  return blogsData;
}

export async function getEventsData() {
  const blogsData: any[] = [];

  const blogRef = collection(db, "event");

  const snapshot = await getDocs(blogRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return [];
  }
  snapshot.forEach((doc: any) => {
    blogsData.push({ id: doc.id, ...doc.data() });
  });

  return blogsData;
}

export async function getQuestionsData() {
  const questionsData: any[] = [];
  const blogRef = collection(db, "questions");

  const snapshot = await getDocs(blogRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return [];
  }
  snapshot.forEach((doc: any) => {
    questionsData.push({ id: doc.id, ...doc.data() });
  });
  return questionsData;
}

export async function getBlogsData() {
  const blogsData: any[] = [];
  const blogRef = query(collection(db, "blogs"), where("draft", "==", false));

  const snapshot = await getDocs(blogRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return [];
  }
  snapshot.forEach((doc: any) => {
    blogsData.push({ id: doc.id, ...doc.data() });
  });
  return blogsData;
}

export async function getGalleryData() {
  const petImages: any[] = [];
  const imageRef = collection(db, "petImages");

  const snapshot = await getDocs(imageRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return [];
  }
  snapshot.forEach((doc: any) => {
    petImages.push({ id: doc.id, ...doc.data() });
  });
  return petImages;
}

export async function getStoriesData() {
  const storiesData: any[] = [];
  const storyRef = query(collection(db, "storys"), where("draft", "==", false));

  const snapshot = await getDocs(storyRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return [];
  }
  snapshot.forEach((doc: any) => {
    storiesData.push({ id: doc.id, ...doc.data() });
  });
  return storiesData;
}

export const fetchComments = async (blogId: any) => {
  try {
    let q = query(collection(db, "comments"));

    if (blogId !== "") {
      q = query(collection(db, "comments"), where("imageId", "==", blogId));
    } else {
      q;
    }

    const querySnapshot = await getDocs(q);
    const fetchedComments: any[] = [];
    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return [];
    }

    querySnapshot.forEach((doc) => {
      fetchedComments.push({ id: doc.id, ...doc.data() });
    });

    return fetchedComments;
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
};

export async function getUsersData() {
  const questionsData: any[] = [];
  const blogRef = collection(db, "users");

  const snapshot = await getDocs(blogRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return [];
  }
  snapshot.forEach((doc: any) => {
    questionsData.push({ id: doc.id, ...doc.data() });
  });
  return questionsData;
}

export async function getPurchasesData() {
  const purchasesData: any[] = [];
  const purchaseRef = query(collection(db, "purchases"));

  const purchaseSnapshot = await getDocs(purchaseRef);
  if (purchaseSnapshot.empty) {
    console.log("No matching documents.");
    return [];
  }

  purchaseSnapshot.forEach((doc: any) => {
    purchasesData.push({ id: doc.id, ...doc.data() });
  });
  return purchasesData;
}
