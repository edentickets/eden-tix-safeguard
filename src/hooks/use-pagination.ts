import { useState } from "react";

export const usePagination = (itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const calculateTotalPages = (totalItems: number) => 
    Math.ceil(totalItems / itemsPerPage);

  const getPageRange = () => {
    const from = (currentPage - 1) * itemsPerPage;
    const to = from + itemsPerPage - 1;
    return { from, to };
  };

  return {
    currentPage,
    setCurrentPage,
    calculateTotalPages,
    getPageRange,
  };
};