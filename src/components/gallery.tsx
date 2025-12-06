"use client";

import { useState } from "react";
import FsLightbox from "fslightbox-react";

type PhotoItem = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
};

type Props = {
  before: PhotoItem[]; // fotografie PŘED
  after: PhotoItem[]; // fotografie PO
  // volitelné: cover obrázek pro tlačítko (pokud chceš náhled na button)
  beforeCover?: string;
  afterCover?: string;
  buttonClassName?: string;
};

export default function Gallery({ before, after, buttonClassName }: Props) {
  const [openBefore, setOpenBefore] = useState(false);
  const [startBefore, setStartBefore] = useState(1);

  const [openAfter, setOpenAfter] = useState(false);
  const [startAfter, setStartAfter] = useState(1);

  const beforeSources = before.map((p) => p.src);
  const afterSources = after.map((p) => p.src);

  const btnBase =
    buttonClassName ??
    "grid items-center py-1 px-2 rounded-xl shadow-lg bg-gradient-to-br from-green-700/90 to-yellow-700/50";

  return (
    <div className="grid gap-4 lg:w-96">
      {/* BEFORE button */}
      <div className="grid">
        <button
          className={btnBase}
          onClick={() => {
            setStartBefore(1); // začít od první fotky
            setOpenBefore((s) => !s);
          }}
        >
          <div className="text-left flex justify-between items-center p-2">
            <div className="text-lg font-bold text-white">Před realizací</div>
            <div className="text-xs text-white font-semibold">
              {before.length} fotek
            </div>
          </div>
        </button>

        <FsLightbox
          toggler={openBefore}
          sources={beforeSources}
          slide={startBefore}
        />
      </div>

      {/* AFTER button */}
      <div className="grid">
        <button
          className={btnBase}
          onClick={() => {
            setStartAfter(1);
            setOpenAfter((s) => !s);
          }}
        >
          <div className="text-left flex justify-between items-center p-2">
            <div className="text-lg font-bold text-white">Po realizaci</div>
            <div className="text-xs text-white">{after.length} fotek</div>
          </div>
        </button>

        <FsLightbox
          toggler={openAfter}
          sources={afterSources}
          slide={startAfter}
        />
      </div>
    </div>
  );
}
