import { Search } from 'components/icons'
import cn from 'classnames'
import { useScreen } from 'hooks/useScreen'
import { useBreakPoints } from 'hooks/useBreakPoints'

import { useUI } from 'components/ui/context'
import { Loading } from 'components/ui'

export default function Header() {
  const { screenWidth } = useScreen()
  const { isSm } = useBreakPoints()

  const { searchText, setSearchText, setStartDownload, startDownload } = useUI()

  return (
    <div className="p-2 mb-4 flex flex-col md:flex-row md:justify-between items-center">
      <div className='flex gap-2'>
        <button disabled={startDownload} onClick={() => setStartDownload(true)} className='btn btn-sm btn-neutral'>Download</button>
        {startDownload && <Loading />}
      </div>
      <div
        className="mt-3 md:mt-0"
        style={{ width: isSm ? screenWidth - 48 : 300 }}
      >
        <div
          className={cn(
            'cursor-default relative flex items-center justify-center text-base w-full transition-colors duration-150'
          )}
        >
          <input
            id="searchHeader"
            className="text-accent-9 py-2 bg-accent-0 w-full pl-3 rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
            autoComplete="off"
            placeholder="Pesquisar"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value.toLowerCase())}
          />
          <div className="cursor-pointer text-accent-7 absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Search />
          </div>
        </div>
      </div>
    </div>
  )
}
