"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginStatus() {
  const supabase = createClient();
  const router = useRouter();
  const [user, setUser] = useState(null);

  //로그인 상황
  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    })()
  }, [supabase.auth]);


  //로그아웃 버튼 클릭 시, 홈으로 이동
  const handleSignout = async () => {
    const { error } = await supabase.auth.signOut();
    if(!error) {
      setUser(null);
      router.push('/');
    }
    alert(error);
  }

  return (
    <>
      {user && <button onClick={handleSignout}>로그아웃</button>}
    </>

  )

}