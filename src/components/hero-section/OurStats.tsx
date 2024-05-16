import { BarChartBig, CalendarCheck2, UserCheck } from 'lucide-react';

export const OurStats = async () => {
    const totalCustomer = 10;
    const redirect_per_day = 100;
    return (
        <section className="md:mt-4 overflow-hidden mt-9 w-full dark:bg-primary-foreground bg-secondary-foreground p-3 rounded-2xl shadow-inner shadow-teal-300 dark:shadow-[#FFD700]">
            <h1 className=" w-full mt-3 text-xl/relaxed md:text-3xl/relaxed flex justify-center items-center gap-1 text-accent dark:text-secondary-foreground bg-cover bg-center relative">
                <BarChartBig />
                <span className="capitalize tracking-wider relative z-40 text-2xl md:text-3xl">
                    Our Stats
                </span>
                <div
                    className="w-[33rem] h-[22rem] absolute mt-32 z-10"
                    style={{
                        backgroundImage: `url('/hero/llline.svg')`,
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            </h1>

            <div className="flex w-full min-h-[12rem] flex-row justify-around items-center flex-1 flex-wrap gap-y-3 md:gap-0 text-accent dark:text-secondary-foreground relative z-50 mt-7 mb-5 ">
                <div className="text-center flex flex-col items-center gap-y-3 hover:border-[0.2px] p-5 md:p-9 rounded-2xl hover:bg-gray-50/5 hover:dark:bg-gray-500/5 cursor-pointer hover:transition hover:delay-75 ">
                    <div className="flex items-center justify-center gap-2">
                        <CalendarCheck2 className="h-10 w-10" />
                        <h1 className="text-xl md:text-3xl">
                            Redirect Per Day
                        </h1>
                    </div>
                    <span className="font-bold tracking-widest text-[#FFD700] dark:text-orange-100 text-3xl md:text-5xl">
                        {redirect_per_day}
                    </span>
                </div>
                <div className="text-center flex flex-col items-center gap-y-3 hover:border-[0.3px]  p-5 md:p-9 rounded-2xl hover:bg-gray-50/5 hover:dark:bg-gray-500/5 cursor-pointer hover:transition hover:delay-75 ">
                    <div className="flex items-center justify-center gap-2">
                        <UserCheck className="h-10 w-10" />
                        <h1 className="text-xl md:text-3xl">Happy Customers</h1>
                    </div>
                    <span className="font-bold tracking-widest  text-[#FFD700]  dark:text-orange-100  text-3xl md:text-5xl">
                        {totalCustomer}
                    </span>
                </div>
            </div>
        </section>
    );
};
