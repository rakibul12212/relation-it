import { IoIosSync } from "react-icons/io";
import { FaBirthdayCake } from "react-icons/fa";

const EmployeesPage = () => {
  return (
    <div>
      <div className="flex justify-around py-5">
        <div id="permission" className="bg-white p-5 rounded-md shadow-md">
          <p className="py-4 border-b-1 border-gray-300 text-2xl">Permission</p>
          <div className="flex items-center gap-x-2 text-center">
            <div className="">
              <p className="px-10 py-2 border rounded-md">9.00 Hrs</p>
              <p className="">Approved</p>
            </div>
            <div className="border-r-1 border-gray-500 text-center"></div>
            <div>
              <p className="px-10 py-2 border rounded">10.00 Hrs</p>
              <p>Remaining</p>
            </div>
          </div>
        </div>
        <div id="leave" className="bg-white p-5 rounded-md shadow-md">
          <p className="py-4 border-b-1 border-gray-300 text-2xl">Leave</p>
          <div className="flex items-center gap-x-2 text-center">
            <div className="">
              <p className="px-10 py-2 border rounded">4.5 Days</p>
              <p className="">Taken</p>
            </div>
            <div className="border-r-1 border-gray-500 text-center"></div>
            <div>
              <p className="px-10 py-2 border rounded">7.5 Days</p>
              <p>Remaining</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="today" className="bg-white p-5 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <p className="py-2 text-2xl">Todays</p>
            <IoIosSync />
          </div>
          <div className="flex item-center gap-x-10">
            <FaBirthdayCake className="text-purple-900" />

            <p>No Birthday Today</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;
