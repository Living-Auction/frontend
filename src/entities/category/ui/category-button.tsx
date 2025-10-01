interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
}

const CategoryButton = ({ icon, label, ...props }: Props) => {
  return (
    <button {...props} className='flex flex-col items-center gap-1'>
      <div className='w-14 h-14 rounded-3xl flex items-center justify-center bg-primary-100'>
        {icon}
      </div>
      <span className='text-body font-medium'>{label}</span>
    </button>
  );
};

export default CategoryButton;
