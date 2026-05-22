"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PetFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");
  const [sort, setSort] = useState("");

  // sync URL → state
  useEffect(() => {
    setSearch(searchParams.get("search") || "");
    setSpecies(searchParams.get("species") || "");
    setSort(searchParams.get("sort") || "");
  }, []);

  // debounce search + stable update
  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams();

      if (search) params.set("search", search);
      if (species) params.set("species", species);
      if (sort) params.set("sort", sort);

      router.push(`/pets?${params.toString()}`);
    }, 400);

    return () => clearTimeout(handler);
  }, [search, species, sort]);

  return (
    <div className="bg-white/80 backdrop-blur-xl border shadow-xl rounded-3xl p-6 mb-10">
      <h3 className="font-bold mb-5">Filter & Search</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* SEARCH */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search pets..."
          className="input input-bordered w-full rounded-2xl"
        />

        {/* SPECIES */}
        <select
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          className="select select-bordered w-full rounded-2xl"
        >
          <option value="">All Species</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="rabbit">Rabbit</option>
        </select>

        {/* SORT */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="select select-bordered w-full rounded-2xl"
        >
          <option value="">Default</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default PetFilter;