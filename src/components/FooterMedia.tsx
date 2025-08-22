import type { FooterMediaProps } from "../types"


export default function FooterMedia({ AllMedia }: FooterMediaProps) {
    return (
        <div
            className="flex items-center gap-[16px] 2xl:gap-[20px]"
        >
            {
                AllMedia.map((media) => {
                    return (
                        <button
                            className="flex itms-center justify-center p-[12px] sm:p-[14px] 2xl:p-[16px] rounded-[8px] 2xl:rounded-[12px] cursor-pointer bg-brown-80"
                        >
                            <a href="#">
                                <img
                                    src={media}
                                    alt="MediaIcon"
                                    className="w-[24px] sm:w-[28px] 2xl:w-[34px]"
                                />
                            </a>
                        </button>
                    )
                })

            }
        </div>
    )
}
