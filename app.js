// ✅ Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } 
  from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// ✅ Your Firebase config (replace with yours!)
const firebaseConfig = {
  apiKey: "AIzaSyXXXX",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456",
  appId: "1:123456:web:abcd"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Save product
async function saveProduct() {
  let name = document.getElementById("name").value;
  let desc = document.getElementById("desc").value;
  let price = document.getElementById("price").value;

  try {
    await addDoc(collection(db, "products"), {
      name: name,
      description: desc,
      price: price
    });
    alert("✅ Product Saved!");
    fetchProducts(); // refresh list
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// ✅ Fetch all products
async function fetchProducts() {
  let listDiv = document.getElementById("product-list");
  listDiv.innerHTML = ""; // clear old list

  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    let data = doc.data();
    listDiv.innerHTML += `<p><b>${data.name}</b> - ${data.description} (₹${data.price})</p>`;
  });
}

// ✅ Auto load products on start
fetchProducts();
