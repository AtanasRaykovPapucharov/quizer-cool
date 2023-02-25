import { useEffect } from "react"
import { useAppSelector } from '../../redux/hooks/useAppSelector'
import { useAppDispatch } from '../../redux/hooks/useAppDispatch'
import { action } from '../../redux/action'
import { ActionType } from '../../redux/action/type'
import { 
  MenuBtnCss, 
  CommonCss, 
  MenuBarOneCss, 
  MenuBarTwoCss, 
  MenuBarThreeCss
} from "./styles"

const MenuBtn = () =>  {
  const menuClosed = useAppSelector(state => state.isMenuClosed)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(action(ActionType.IS_MENU_CLOSED))
  // }, [])

  return (
      <div className="menu-btn" onClick={() => dispatch(action(ActionType.IS_MENU_CLOSED))} style={MenuBtnCss}>
        <div className="bar1" style={menuClosed ? {...CommonCss} : {...MenuBarOneCss}}></div>
        <div className="bar2" style={menuClosed ? {...CommonCss} : {...MenuBarTwoCss}}></div>
        <div className="bar3" style={menuClosed ? {...CommonCss} : {...MenuBarThreeCss}}></div>
      </div>
  )
}

export default MenuBtn
