import AdminCard from "@/components/modules/dashboard/AdminCard";

async function AdminPage({ data }) {
  return (
    <div className="mb-96 border-2 p-5 rounded-xl">
      {!data.length && (
        <p className="bg-rose-200 rounded-lg text-rose-700 font-normal text-2xl p-3">
          هیچ آگهی در انتظار تاییدی وجود ندارد!
        </p>
      )}
      {data.map((profile) => (
        <AdminCard
          key={profile._id}
          profile={JSON.parse(JSON.stringify(profile))}
        />
      ))}
    </div>
  );
}

export default AdminPage;
