import { FormData } from "@/components/container/landing/form-card";
import toast from "react-hot-toast";
const SendEmail = (data: FormData) => {
  const apiEndpoint = "/api/email";
  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      toast.success(response.message);
    })
    .catch((err) => {
      toast.error(err);
    });
};

export { SendEmail };
