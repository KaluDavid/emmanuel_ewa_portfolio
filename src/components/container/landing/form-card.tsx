"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Filled_Btn } from "../../ui/buttons/filled-btn";
import { Textarea } from "@/components/ui/textarea";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { SendEmail } from "@/app/utils/send-email";

// datadata
export type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Form_Card() {
  const inputStyle =
    "h-12 outline-0 focus:outline-1 focus:border focus-visible:ring-[1px]";
  const labelStyle =
    "px-7 py-1.5 items-center text-center flex justify-center ml-6 bg-white text-base sm:text-lg w-[59px] z-10 -mb-6";

  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    SendEmail(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex font-onest text-header flex-col sm:w-[500px] w-full items-end gap-8 [&_button]:max-sm:w-full "
    >
      <div className="flex flex-col gap-6 *:w-full w-full ">
        <div className="grid gap-2">
          <Label htmlFor="name" className={labelStyle}>
            Name
          </Label>
          <Input
            id="name"
            type="text"
            className={inputStyle}
            required
            {...register("name", { required: true })}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className={labelStyle}>
            Email
          </Label>
          <Input
            id="email"
            type="email"
            required
            className={inputStyle}
            {...register("email", { required: true })}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message" className={clsx(labelStyle, "w-23 ")}>
            Message
          </Label>
          <Textarea
            required
            id="message"
            className={clsx(inputStyle, "h-[132px] py-2 pt-5")}
            {...register("message", { required: true, min: 120 })}
          />
        </div>
      </div>
      <Filled_Btn text="Send a message" />
    </form>
  );
}
