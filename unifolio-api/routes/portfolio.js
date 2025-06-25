 
// routes/portfolio.js
import express from "express";
import { doc, setDoc, getDoc } from "firebase/firestore";
import db from "../firebase-config.js";

const router = express.Router();

// Save or update portfolio data
router.post("/save", async (req, res) => {
  try {
    const { uid, portfolioData } = req.body;

    if (!uid || !portfolioData) {
      return res.status(400).json({ message: "UID and portfolio data are required" });
    }

    const docRef = doc(db, "portfolios", uid);
    await setDoc(docRef, portfolioData);
    res.status(200).json({ message: "Portfolio saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving portfolio", error: error.message });
  }
});

// Get portfolio data
router.get("/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const docRef = doc(db, "portfolios", uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    res.status(200).json(docSnap.data());
  } catch (error) {
    res.status(500).json({ message: "Error retrieving portfolio", error: error.message });
  }
});

export default router;
