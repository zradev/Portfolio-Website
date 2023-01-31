import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import image from "../assets/contact.png";

const Contact = () => {
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
        <section id="Contact" className="p-10 md:p-20">
            {/* HEADINGS */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className="text-center"
            >
                <p className="text-4xl">Contact me</p>
            </motion.div>
            <div className="flex flex-col-reverse md:flex-row md:justify-between items-center mt-14">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="basis-1/2 mt-10 md:mt-0"
                >
                    <form target="_blank" onSubmit={onSubmit} action="https://formsubmit.co/0eda559c5891f5f06e4401fd847b0b80 " method="POST">
                        <input
                            className="w-full rounded-lg text-black font-semibold placeholder-opaque-black p-3"
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100
                            })}
                        />
                        {errors.name && (
                            <p className="text-red-500 mt-1">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 char."}
                            </p>
                        )}

                        <input
                            className="w-full rounded-lg text-black font-semibold placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500 mt-1">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}

                        <textarea
                            className="w-full rounded-lg text-black font-semibold placeholder-opaque-black p-3 mt-5"
                            placeholder="MESSAGE"
                            rows={4}
                            cols={50}
                            {...register("message", {
                                required: true,
                                maxLength: 2000
                            })}
                        />
                        {errors.message && (
                            <p className="text-red-500 mt-1">
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max length is 2000 char."}
                            </p>
                        )}
                        <button className="flex bg-button rounded-md border border-gray-400 hover:border-gray-300 mx-auto mt-10 px-5 py-2" type="submit">
                            Contact me
                        </button>
                    </form>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="md:w-1/3 flex justify-center"
                >
                    <img src={image} alt="contact" />
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
