import { useForm } from "react-hook-form";

export default function From() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="bg-slate-200 rounded-xl p-10 drop-shadow-lg w-full">
      <form action="" className="flex flex-col gap-3">
        <label for="subject">Subject</label>
        <select name="" id="">
          <option selected disabled value="">
            Select
          </option>
          <option value="contact">Contact</option>
          <option value="quote">Quote</option>
        </select>
        <label for="name">Name</label>
        <input
          className="rounded-md p-2 border border-gray-300"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
        <label for="email">Email</label>
        <input
          className="rounded-md p-2 border border-gray-300"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <label for="message">Message</label>
        <textarea
          className="rounded-md p-2 border border-gray-300"
          id="message"
          name="message"
          placeholder="Message"
          rows="5"
        ></textarea>
      </form>
      <button
        type="submit"
        className="my-4 bg-primary-700 text-white hover:bg-primary-400 transition-all duration-300 ease-in-out px-4 py-2 rounded-md"
      >
        Submit
      </button>
      <div>
        <p className="text-gray-600 text-left text-base max-w-md">
          By clicking Submit vou agree that COMPANY can grocess your personal
          data as required for the information request, You have read the{" "}
          <span className="text-primary-500 border-b border-primary-500 cursor-pointer">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </div>
  );
}
