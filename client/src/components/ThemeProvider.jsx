import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className='bg-white text-[#222831] dark:bg-[#2a303b] dark:text-[#EEEEEE] min-h-screen'>
        {children}
      </div>
    </div>
  );
}
