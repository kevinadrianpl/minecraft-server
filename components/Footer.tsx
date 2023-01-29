import siteConfig from "@/data/siteConfig";
import { cx } from "@/lib/utils";
import { ThemeSelect } from "@/components/ThemeSelect";

const iconProps = { className: "w-4 h-4" };



        </ul>
      ) : null}
      <div className="mt-8 flex justify-center">
        <ThemeSelect />
      </div>
    </footer>
  );
};
