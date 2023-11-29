import { getUsersData } from "@/app/api/GerData";

const TotalUsers = async () => {
  const usersData: any = await getUsersData();

  return (
    <p className="text-lg md:text-2xl font-bold text-white">
      {(usersData && usersData.length) || 0}
    </p>
  );
};

export default TotalUsers;
