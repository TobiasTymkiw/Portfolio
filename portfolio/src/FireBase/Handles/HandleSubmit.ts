import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../fireBaseSetup";
import Swal from "sweetalert2";

interface infoform {
  firstName: string,
  email: string,
  message: string
}

const handleSubmitFireBase = (infoform: infoform) => {
  const ref = collection(firestore, "Messages from Portfolio"); // Firebase creates this automatically
  let data = {
    Name: infoform.firstName,
    Email: infoform.email,
    Message: infoform.message,
  };
  try {
    addDoc(ref, data).then((ref) => {
      console.log("Document has been added successfully");
      Swal.fire({
        title: 'Good job!',
        text: 'The message has been sent successfully!',
        icon: 'success',
      })
    })
  } catch (err) {
    console.log(err);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }
};
export default handleSubmitFireBase;
