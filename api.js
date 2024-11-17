import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, query, where } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyAonZAs2SYRn4n4eVvx45y6qDKfCsqf2jA",
    authDomain: "djs08-6516b.firebaseapp.com",
    projectId: "djs08-6516b",
    storageBucket: "djs08-6516b.firebasestorage.app",
    messagingSenderId: "506613078792",
    appId: "1:506613078792:web:78a16b0a49ccf655726abd",
    measurementId: "G-WCGJ1ME4QG" }


    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    const vansCollectionRef = collection(db, "vans")

    export async function getVans() {
        const snapshot = await getDocs(vansCollectionRef)
        const vans = snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }))
        return vans
    }

    export async function getVan(id) {
        const docRef = doc(db, "vans", id)
        const snapshot = await getDoc(docRef)
        return {
            ...snapshot.data(),
            id: snapshot.id
        }
    }

    
export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
   
    return data
}

