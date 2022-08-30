import "/node_modules/flag-icons/css/flag-icons.min.css";
import { CgMathPercent } from 'react-icons/cg'

const NationalityContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-8 py-4 mt-12">
        <div className='w-full bg-gray-400 rounded-xl shadow-md p-4'>
            <div className="flex flex-wrap border-b border-white ">
                <div className="rounded-xl grid items-center w-24 h-24 py-4 justify-center fis fi-au bg-cover mb-4 -mt-10" />
                <div className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right">
                    <h5 className="text-gray-300 font-light mb-1">Australia</h5>
                    <span className="text-3xl text-white">402</span>
                </div>
            </div>
            <div className="text-sm text-gray-300 pt-4 flex items-center justify-center">
            <span className="font-light">27.91 % of total users</span>
            </div>
        </div>

        <div className='w-full bg-gray-400 rounded-xl shadow-md p-4'>
            <div className="flex flex-wrap border-b border-white ">
                <div className="rounded-xl grid items-center w-24 h-24 py-4 justify-center fis fi-br bg-cover mb-4 -mt-10" />
                <div className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right">
                    <h5 className="text-gray-300 font-light mb-1">Brasil</h5>
                    <span className="text-3xl text-white">178</span>
                </div>
            </div>
            <div className="text-sm text-gray-300 pt-4 flex items-center justify-center">
            <span className="font-light">15.30 % of total users</span>
            </div>
        </div>

        <div className='w-full bg-gray-400 rounded-xl shadow-md p-4'>
            <div className="flex flex-wrap border-b border-white ">
                <div className="rounded-xl grid items-center w-24 h-24 py-4 justify-center fis fi-ca bg-cover mb-4 -mt-10" />
                <div className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right">
                    <h5 className="text-gray-300 font-light mb-1">Canada</h5>
                    <span className="text-3xl text-white">92</span>
                </div>
            </div>
            <div className="text-sm text-gray-300 pt-4 flex items-center justify-center">
            <span className="font-light">7.06 % of total users</span>
            </div>
        </div>

        <div className='w-full bg-gray-400 rounded-xl shadow-md p-4'>
            <div className="flex flex-wrap border-b border-white ">
                <div className="rounded-xl grid items-center w-24 h-24 py-4 justify-center fis fi-gb bg-cover mb-4 -mt-10" />
                <div className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right">
                    <h5 className="text-gray-300 font-light mb-1">Gran Bretaña</h5>
                    <span className="text-3xl text-white">152</span>
                </div>
            </div>
            <div className="text-sm text-gray-300 pt-4 flex items-center justify-center">
            <span className="font-light">12.87 % of total users</span>
            </div>
        </div>

    </div>
  )
}

export default NationalityContainer