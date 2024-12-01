'use client';

import { useState } from 'react';

export default function Home() {
   const [entry, setEntry] = useState({
      journal: '',
      debit: '',
      credit: '',
      description: '',
      tvaCode: '',
      debitAmount: '',
      creditAmount: '',
   });

   // Suggestions pour les comptes
   const accountSuggestions = [
      '601 - Achats de matières premières',
      '602 - Achats de fournitures',
      '603 - Variations des stocks',
      '604 - Achats non stockés',
      '605 - Prestations de services',
   ];

   const [filteredDebitSuggestions, setFilteredDebitSuggestions] = useState([]);
   const [filteredCreditSuggestions, setFilteredCreditSuggestions] = useState([]);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setEntry({ ...entry, [name]: value });

      if (name === 'debit') {
         setFilteredDebitSuggestions(
            accountSuggestions.filter((suggestion) =>
               suggestion.toLowerCase().includes(value.toLowerCase())
            )
         );
      } else if (name === 'credit') {
         setFilteredCreditSuggestions(
            accountSuggestions.filter((suggestion) =>
               suggestion.toLowerCase().includes(value.toLowerCase())
            )
         );
      }
   };

   const handleSuggestionClick = (name, suggestion) => {
      setEntry({ ...entry, [name]: suggestion });
      if (name === 'debit') setFilteredDebitSuggestions([]);
      if (name === 'credit') setFilteredCreditSuggestions([]);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Saisie effectuée :', entry);
   };

   return (
      <div className="min-h-screen flex items-center bg-gray-100 p-4">
         <form
            className="w-full bg-white rounded-lg shadow-md p-6 relative border border-red-600"
            onSubmit={handleSubmit}
         >
            <h2 className="text-xl font-semibold mb-4">Saisie d'écriture comptable</h2>

            <table className="w-full table-auto border-collapse border border-gray-300 mb-6">
               <thead>
                  <tr className="bg-gray-200">
                     <th className="px-4 py-2 border border-gray-300 text-left">Journal</th>
                     <th className="px-4 py-2 border border-gray-300 text-left">Débit</th>
                     <th className="px-4 py-2 border border-gray-300 text-left">Crédit</th>
                     <th className="px-4 py-2 border border-gray-300 text-left">Libellé</th>
                     <th className="px-4 border border-gray-300 text-left">Code TVA</th>
                     <th className="px-4 py-2 border border-gray-300 text-left">Montant Débit</th>
                     <th className="px-4 py-2 border border-gray-300 text-left">Montant Crédit</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td className="border border-gray-300 p-0">
                        <input
                           type="text"
                           name="journal"
                           value={entry.journal}
                           onChange={handleChange}
                           className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                     </td>

                     {/* Champ Débit */}
                     <td className="p-0 border border-gray-300 relative">
                        <input
                           type="text"
                           name="debit"
                           value={entry.debit}
                           onChange={handleChange}
                           className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                           placeholder="Saisir un compte débit"
                        />
                        {filteredDebitSuggestions.length > 0 && (
                           <ul className="absolute top-full left-0 w-full bg-white border border-gray-300  shadow-lg z-50 max-h-40 overflow-y-auto">
                              {filteredDebitSuggestions.map((suggestion, index) => (
                                 <li
                                    key={index}
                                    className="px-3 py-2 hover:bg-blue-100 cursor-pointer flex justify-center items-center"
                                    onClick={() =>
                                       handleSuggestionClick('debit', suggestion)
                                    }
                                 >
                                    {suggestion}
                                 </li>
                              ))}
                           </ul>
                        )}
                     </td>

                     {/* Champ Crédit */}
                     <td className="p-0 border border-gray-300 relative">
                        <input
                           type="text"
                           name="credit"
                           value={entry.credit}
                           onChange={handleChange}
                           className="w-full px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-500"
                           placeholder="Saisir un compte crédit"
                        />
                        {filteredCreditSuggestions.length > 0 && (
                           <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-lg z-50 max-h-40 overflow-y-auto">
                              {filteredCreditSuggestions.map((suggestion, index) => (
                                 <li
                                    key={index}
                                    className="px-3 py-2 hover:bg-blue-100 cursor-pointer flex justify-center items-center"
                                    onClick={() =>
                                       handleSuggestionClick('credit', suggestion)
                                    }
                                 >
                                    {suggestion}
                                 </li>
                              ))}
                           </ul>
                        )}
                     </td>

                     <td className="p-0 border border-gray-300">
                        <input
                           type="text"
                           name="description"
                           value={entry.description}
                           onChange={handleChange}
                           className="w-full px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                     </td>
                     <td className="p-0 border border-gray-300">
                        <input
                           type="text"
                           name="tvaCode"
                           value={entry.tvaCode}
                           onChange={handleChange}
                           className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                     </td>
                     <td className="p-0 border border-gray-300">
                        <input
                           type="number"
                           name="debitAmount"
                           value={entry.debitAmount}
                           onChange={handleChange}
                           className="w-full px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                     </td>
                     <td className="p-0 border border-gray-300">
                        <input
                           type="number"
                           name="creditAmount"
                           value={entry.creditAmount}
                           onChange={handleChange}
                           className="w-full px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                     </td>
                  </tr>
               </tbody>
            </table>

            <button
               type="submit"
               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
               Enregistrer
            </button>
         </form>
      </div>
   );
}
