const TextArea = (props) => {
    var opts = {};
    return (
        <textarea name={props.name} className="block bg-[#e3e3e3cc] w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6" {...props} />
    )
}
export default TextArea                                                                                                                                                                                                                                                                