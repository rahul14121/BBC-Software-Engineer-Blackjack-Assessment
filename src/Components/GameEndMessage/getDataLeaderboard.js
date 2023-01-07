import { database } from "./GameEndLeaderboardInitialize.js";
import {doc, getDoc, getDocs, query, collection} from "firebase/firestore";

const dataReturn = []
async function getDataLeaderboard() {
   const databaseSnapshot = await getDocs(collection(database, "playerHighScore"));
   databaseSnapshot.forEach((doc) => {
    dataReturn.push(doc.data());
    
   })

   dataReturn.splice(Math.floor((dataReturn.length)/4), Math.floor((dataReturn.length)/2))
   dataReturn.forEach((item, i) => {
    item.id = i + 1;
   })
   //console.log(dataReturn);
   return dataReturn 
  }
  
  export default getDataLeaderboard;