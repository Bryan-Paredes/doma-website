import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface Inputs {
  subject: string;
  name: string;
  email: string;
  message: string;
}

export default function From() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    toast.success("Your message has been sent successfully");
    console.log(data);
  };

  return (
    <div className="rounded-xl p-10 drop-shadow-lg w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="subject">Subject</label>
          <select
            {...register("subject", {
              required: {
                value: true,
                message: "Subject is required",
              },
            })}
            value={watch("subject")}
            id="subject"
            className="rounded-md border border-gray-300 cursor-pointer"
          >
            <option selected disabled value="">
              Select
            </option>
            <option value="contact">Contact</option>
            <option value="quote">Quote</option>
          </select>
          {errors.subject && (
            <span role="alert" className="text-red-500 font-medium text-sm">
              {errors.subject.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            className="rounded-md p-2 border border-gray-300"
            type="text"
            id="name"
            placeholder="Name"
          />
          {errors.name && (
            <span role="alert" className="text-red-500 font-medium text-sm">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="rounded-md p-2 border border-gray-300"
            type="email"
            id="email"
            placeholder="Email"
          />
          {errors.email && (
            <span role="alert" className="text-red-500 font-medium text-sm">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            {...register("message", {
              required: {
                value: true,
                message: "Message is required",
              },
            })}
            className="rounded-md p-2 border border-gray-300"
            id="message"
            placeholder="Message"
            rows={5}
          />
          {errors.message && (
            <span role="alert" className="text-red-500 font-medium text-sm">
              {errors.message.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="my-4 bg-gradient-primary hover-gradient-primary text-white  transition-all duration-300 ease-in-out px-6 py-2 rounded-md"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      <div>
        <p className="text-gray-600 text-left text-base max-w-md">
          By clicking Submit, you agree to DOMA processing your personal data
          for the information request
        </p>
      </div>
    </div>
  );
}
