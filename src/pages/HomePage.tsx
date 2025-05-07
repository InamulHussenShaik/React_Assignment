import React from "react";

export default function HomePage() {
  return (
    <div className="p-6">
      <p className="text-2xl mb-6">Welcome To Page</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Row 1 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 1</div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 2</div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 3</div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 4</div>

        {/* Row 2 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 5</div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 6</div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 7</div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 8</div>

        {/* Row 3 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 9</div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 10</div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 11</div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 12</div>

        {/* Row 4 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 13</div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 14</div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 15</div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 16</div>

        {/* Row 5 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 17</div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 18</div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 19</div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md h-48">Card 20</div>
      </div>
    </div>
  );
}
