// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6z0PRdQOcNbgZdcs_Iuv-k3ITagBsWeM",
  authDomain: "nj-transportation.firebaseapp.com",
  projectId: "nj-transportation",
  storageBucket: "nj-transportation.appspot.com",
  messagingSenderId: "855779866817",
  appId: "1:855779866817:web:dfaea4960c8670b40dfc40",
  measurementId: "G-PPN86KLR4K"
};

firebase.initializeApp(firebaseConfig);

let id = "cEdrTsfpUNQXxUNV9ymG";

// fetch contact meassages form contactMessages collection
firebase.firestore().collection("contactMessages").doc(id).get().then(function(doc) {
    let data = doc.data();
    console.log("Contact Messages from firebase : ",data);
});

