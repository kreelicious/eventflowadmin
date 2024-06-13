import React from 'react'

const account = [
    { name: 'The Scala', town: 'Merthyr Tydfil', email: 'lindsay.walton@example.com', subscription: 'Full' },
    // More people...
  ]

const page = () => {
  return (
    <div>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Accounts</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the account includin name, area and main contact and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
    </div>
    <div className="mt-8 flow-root overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <table className="w-full text-left">
          <thead className="bg-white">
            <tr>
              <th scope="col" className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                Account
                <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
                <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Town
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell"
              >
                Email
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Subscription
              </th>
              <th scope="col" className="relative py-3.5 pl-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {account.map((account) => (
              <tr key={account.email}>
                <td className="relative py-4 pr-3 text-sm font-medium text-gray-900">
                  {account.name}
                  <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                  <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{account.town}</td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">{account.email}</td>
                <td className="px-3 py-4 text-sm text-gray-500">{account.subscription}</td>
                <td className="relative py-4 pl-3 text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {account.email}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default page
