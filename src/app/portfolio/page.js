import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import Image from "next/image";

export default async function Portfolio() {
  const supabase = await createClient();
  //limit(n) 최근 게시물 n개 가져와
  const { data: projects } = await supabase.from("portfolio").select().limit(3);
  return (
    <div className="container latest_portfolio">
      {/* portfolio 데이터 조회하고 출력 */}
      <div className="row list">
        {
          projects.map(p =>
            <div className="col-md-4" key={p.id}>
              <div className="contents shadow">
                {/* <Image src="/images/latest_portfolio_01.jpg" alt="latest_portfolio_01" width={} height={}/> */}
                <div className="hover_contents">
                  <div className="list_info">
                    <h3><Link href="">{p.title}</Link>
                      {/* <Image src="/images/portfolio_list_arrow.png" alt="list arrow" /> */}
                    </h3>
                    <p><Link href="">Click to see project</Link></p>
                  </div>
                </div>
              </div>
            </div>
          )
        }

      </div>

      <p className="pagenation shadow">
        <Link href="" className="secondary-btn active">1</Link>
        <Link href="" className="secondary-btn">2</Link>
        <Link href="" className="secondary-btn">3</Link>
        <Link href="" className="secondary-btn">4</Link>
      </p>
    </div>
  )
}