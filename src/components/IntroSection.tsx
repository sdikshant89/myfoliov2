import { Spotlight } from './ui/Spotlight';

function IntroSection() {
  return (
    <div className="min-h-[55rem] md:h-[40rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-90 left-50 right-60 md:left-60 md:-top-20"
        fill="blue"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          I'm Dikshant Sharma
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          dfnjskdnfksnd fksndfj kasndfd f n jskdnfk sndfk sndfjka sndfd fnjskdnf
          k s n dfksn dfjk asndf dfnjskdnfk sndfk sndf jkas ndfdf dfnjskdnfksnd
          fksndfj kasndfd f n jskdnfk sndfk sndfjka sndfd fnjskdnf k s n dfksn
          dfjk asndf dfnjskdnfk sndfk sndf jkas ndfdfdfnjskdnfksnd fksndfj k
          asndf dfnjskdnfk sndfk sndf jkas ndfdf dfnjskdnfksnd fksndfj kasndfd f
          n jskdnfk sndfk sndfjka sndfd fnjskdnf k s n dfksn dfjk asndf
          dfnjskdnfk sndfk sndf jkas ndfdfdfnjskdnfksnd fksndfj
        </p>
        <div className="'mt-4">down bouncing arow</div>
      </div>
    </div>
  );
}

export default IntroSection;
