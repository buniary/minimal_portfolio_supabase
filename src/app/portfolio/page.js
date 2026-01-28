import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import Image from "next/image";

export default async function Portfolio() {
  //limit(n) 최근 게시물 n개 가져와
  const supabase = createClient();
  const { data: projects } = await supabase.from("portfolio").select().limit(9).order('id', { ascending: false });
  console.log(projects);


  const getPublicUrl = (path) => {
    const { data } = supabase
      .storage
      .from('portfolio')
      .getPublicUrl(path)
    return data.publicUrl;
  }


  return (
    <div className="container latest_portfolio">
      {/* portfolio 데이터 조회하고 출력 */}
      <div className="row list">
        {
          projects.map(p =>
            <div className="col-md-4" key={p.id}>
              <div className="contents shadow">
                {
                  p.thumbnail ?
                  <Image src={getPublicUrl(p.thumbnail)} alt={p.title} width={364} height={209} />
                  :
                  <Image src="https://dummyimage.com/364x209/ccc/fff" width={364} height={209} alt="no thumbnal" />
                }
                <div className="hover_contents">
                  <div className="list_info">
                    <h3><Link href={`/detail/${p.id}`}>{p.title}</Link>
                      <Image src="/images/portfolio_list_arrow.png" width={6} height={8} a alt="list arrow" />
                    </h3>
                    <p><Link href={`/detail/${p.id}`}>Click to see project</Link></p>
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