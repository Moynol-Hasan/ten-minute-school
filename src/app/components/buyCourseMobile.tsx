const BuyCourseMobile = () => {
    return (
        <div className="block md:hidden font-poppins">
            <div className="w-full p-4 bg-white bottom-0 fixed z-50 left-0 right-0 drop-shadow-[0_-3px_15px_rgba(0,0,0,0.20)] animate-fadeIn">
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <div className="inline-block text-2xl font-semibold">৳3850</div>
                        <span className="inline-flex">
                            <del className="ml-2 text-base font-normal">৳5000</del>
                            <div className="c-Tukmu inline-block">
                                <p className="card-price">1150 ৳ ছাড়</p>
                            </div>
                        </span>
                    </div>
                </div>
                <button className="bg-green whitespace-nowrap button primary text-center w-full centered-buttons">
                    কোর্সটি কিনুন
                </button>
            </div>
        </div>
    );
};

export default BuyCourseMobile;