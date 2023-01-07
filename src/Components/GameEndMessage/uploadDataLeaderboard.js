import { database } from "./GameEndLeaderboardInitialize.js";
import {collection, addDoc} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import getDataLeaderboard from "./getDataLeaderboard.js";

async function uploadDataLeaderboard(nameInput, playerWins){
    const docRef = await addDoc(collection(database, "playerHighScore"), {
        username: nameInput,
        uid: uuidv4(),
        score: playerWins,
    });
}
export default uploadDataLeaderboard