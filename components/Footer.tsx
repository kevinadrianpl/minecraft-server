import siteConfig from "@/data/siteConfig";
import { cx } from "@/lib/utils";
import { ThemeSelect } from "@/components/ThemeSelect";

const iconProps = { className: "w-4 h-4" };


export const Footer: React.FC = () => {
              <li key={key}>
                <a
                  href={href}
                  className={cx(
                    "w-8 h-8 grid place-items-center rounded-md",
                    "bg-gray-900 text-gray-50",
                    "dark:bg-gray-800 dark:text-gray-50"
                  )}
                  title={key}
                >
          })}
        </ul>
      ) : null}
      <div className="mt-8 flex justify-center">
        <ThemeSelect />
      </div>
    </footer>
  );
};
