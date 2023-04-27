import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../fireBaseSetup";
const handleSubmitFireBase = (infoform) => {
  const ref = collection(firestore, "Messages from Portfolio"); // Firebase creates this automatically
  let data = {
    Name: infoform.firstName,
    Email: infoform.email,
    Message: infoform.message,
  };
  try {
    addDoc(ref, data).then((ref) => {
      console.log("Document has been added successfully");
      alert('Message sent successfully')
    });
  } catch (err) {
    console.log(err);
    alert('Message not sent successfully')
  }
};
export default handleSubmitFireBase;
