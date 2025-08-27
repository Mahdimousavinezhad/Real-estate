async function DashboardPage({ user }) {
  const createdAt = new Date(user.createdAt).toLocaleDateString("FA-IR");

  return (
    <div>
      <h3 className="text-3xl font-[600] mb-4">سلام 👋</h3>
      <p className="text-lg">
        آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند!
      </p>
      <div className="mt-20 flex items-center gap-3 bg-slate-300 w-fit py-1 px-2 rounded font-normal">
        <p>تاریخ عضویت:</p>
        <span className="text-cs-blue">{createdAt}</span>
      </div>
    </div>
  );
}

export default DashboardPage;
