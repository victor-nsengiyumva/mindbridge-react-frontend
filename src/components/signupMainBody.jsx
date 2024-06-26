import SignUpFormField from "./singupFormField"
export default function SignUpMainBody() {
    return (
        <section className="">
            <div className="bg-white w-[880px]  border border-dark-blue mt-9 mb-9 flex flex-col items-center justify-center rounded-md    min-w-[880px] mx-auto">
                <p className="text-dark-blue font-bold text-3xl pt-12 pb-12">
                    Create an account
                </p>
                <SignUpFormField/>
            </div>
        </section>
    )
}