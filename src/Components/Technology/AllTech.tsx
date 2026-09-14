import { use, useState } from "react";
import type { Itechnology } from "../../type/techType";
import Tech from "./Tech";
import TotalStack from "./TotalStack";
import { toast } from "react-toastify";

export interface TechsProps {
  techPromise: Promise<Itechnology[]>;
}

function AllTech({ techPromise }: TechsProps) {
  const [addedStack, setAddedStack] = useState<Itechnology[]>([]);
  const techs = use(techPromise);

  // Add tech to stack
  const handleAddedStack = (tech: Itechnology): void => {
    setAddedStack((prev) => {
      const exists = prev.some((item) => item.name === tech.name);
      if (exists) return prev;
      return [...prev, tech];
    });

    toast.success(`${tech.name} added to stack!`, {
      position: "top-center"
    });
  };

  // remove tech from stack
  const handleRemove = (id: string): void => {
    setAddedStack((prev) => prev.filter((item) => item.id !== id));
    toast.info(`Removed from the stack!`);
  };

  // remove all
  const handleRemoveAll = (): void => {
    setAddedStack([]);
    toast.info("All items removed from your stack.");
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
        {techs.map((tech) => {
          const isAdded = addedStack.some((item) => item.name === tech.name);

          return (
            <Tech
              key={tech.name}
              tech={tech}
              handleAddedStack={handleAddedStack}
              isAdded={isAdded}
            />
          );
        })}
      </div>

      <TotalStack
        addedStack={addedStack}
      handleRemoveAll={handleRemoveAll}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default AllTech;