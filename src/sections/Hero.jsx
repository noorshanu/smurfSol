import { FaTwitter, FaTelegram } from "react-icons/fa";
function Hero() {
  return (
    <section className=" pt-0  pb-[1rem] ">
      <div className="container-wrapper">
        <div className="relative z-50">
          <div className=" flex justify-center flex-col items-center ">
            <h1 className=" font-groot-one text-lg sm:text-5xl text-center  mb-3">
              Where Solana and Comedy Collide!
            </h1>

            <div className=" w-full">
              <img
                src="images/hero2.png"
                alt=""
                className=" h-auto  mx-auto floating"
              />
            </div>
          </div>
        </div>

        <a
          href="https://solscan.io/token/3z4qzzoLBJpeBHofPb5s88desjdp52gg8HqnzYdvop7b"
          target="_blank"
          className=" font-groot-two text-xs sm:text-xl text-center my-3 flex items-center justify-center "
        >
          CONTRACT: 3z4qzzoLBJpeBHofPb5s88desjdp52gg8HqnzYdvop7b
        </a>

        <div className=" flex justify-center gap-4 items-center">
          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/BN57dZ9rbcZo3jRrRggztaK6qCap9MBnu6pvMwEzEBL4?t=1713631592155"
            target="_blank"
            className="font-groot-one text-2xl uppercase text-black bg-[#ffffffbe] border-2 border-[#000000] py-2 px-6 rounded-full"
          >
            DexTools
          </a>
          <a
            href="https://t.me/smurfwif"
            target="_blank"
            className="font-groot-one text-2xl uppercase text-black bg-[#ffffffbe] border-2 border-[#000000] py-2 px-6 rounded-full"
          >
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
