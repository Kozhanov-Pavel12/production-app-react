import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

//для того, чтобы при каждом изменении не проводить 
//сборку вебпака, а чтобы он автоматически открывался сам
export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        //настройка навигации: убираем ошибку после обновления страницы, когда находимся на /about
        historyApiFallback: true
    }
}